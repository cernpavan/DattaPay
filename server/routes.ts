import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // All API routes should be prefixed with /api

  // GET /api/users - Get all users
  app.get("/api/users", async (_req: Request, res: Response) => {
    try {
      const allUsers = await storage.getAllUsers();
      // Remove passwords from all users (security best practice)
      const usersWithoutPasswords = allUsers.map(({ password, ...user }) => user);
      res.json({ users: usersWithoutPasswords, count: usersWithoutPasswords.length });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  // POST /api/users - Create a new user
  app.post("/api/users", async (req: Request, res: Response) => {
    try {
      const { username, password } = req.body;
      if (!username || !password) {
        return res.status(400).json({ error: "Username and password are required" });
      }
      
      const user = await storage.createUser({ username, password });
      // Don't return password in response (security best practice)
      const { password: _, ...userWithoutPassword } = user;
      res.status(201).json(userWithoutPassword);
    } catch (error: any) {
      // Handle duplicate username error
      if (error.message?.includes("duplicate") || error.code === "23505") {
        return res.status(409).json({ error: "Username already exists" });
      }
      res.status(500).json({ error: error.message });
    }
  });

  // GET /api/users/:id - Get user by ID
  app.get("/api/users/:id", async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const user = await storage.getUser(id);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      // Don't return password in response (security best practice)
      const { password, ...userWithoutPassword } = user;
      res.json(userWithoutPassword);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  // GET /api/users/username/:username - Get user by username
  app.get("/api/users/username/:username", async (req: Request, res: Response) => {
    try {
      const { username } = req.params;
      const user = await storage.getUserByUsername(username);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      // Don't return password in response (security best practice)
      const { password, ...userWithoutPassword } = user;
      res.json(userWithoutPassword);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  // ==========================================
  // LEAD/CONTACT CAPTURE ENDPOINTS
  // ==========================================

  // POST /api/leads - Create a new lead (CTA form submission)
  app.post("/api/leads", async (req: Request, res: Response) => {
    try {
      const { fullName, email, whatsappCountryCode, whatsappNumber } = req.body;

      // Validation
      if (!fullName || !email || !whatsappCountryCode || !whatsappNumber) {
        return res.status(400).json({ 
          error: "All fields are required: fullName, email, whatsappCountryCode, whatsappNumber" 
        });
      }

      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ error: "Invalid email format" });
      }

      // Create lead
      const lead = await storage.createLead({
        fullName,
        email,
        whatsappCountryCode,
        whatsappNumber,
      });

      res.status(201).json({ 
        success: true,
        message: "Lead captured successfully",
        lead 
      });
    } catch (error: any) {
      // Handle duplicate email error
      if (error.message?.includes("duplicate") || error.code === "23505") {
        return res.status(409).json({ error: "Email already exists" });
      }
      res.status(500).json({ error: error.message });
    }
  });

  // GET /api/leads - Get all leads
  app.get("/api/leads", async (_req: Request, res: Response) => {
    try {
      const allLeads = await storage.getAllLeads();
      res.json({ leads: allLeads, count: allLeads.length });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  // GET /api/leads/:id - Get lead by ID
  app.get("/api/leads/:id", async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const lead = await storage.getLead(id);
      if (!lead) {
        return res.status(404).json({ error: "Lead not found" });
      }
      res.json(lead);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  // GET /api/leads/email/:email - Get lead by email
  app.get("/api/leads/email/:email", async (req: Request, res: Response) => {
    try {
      const { email } = req.params;
      const lead = await storage.getLeadByEmail(email);
      if (!lead) {
        return res.status(404).json({ error: "Lead not found" });
      }
      res.json(lead);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  return httpServer;
}
