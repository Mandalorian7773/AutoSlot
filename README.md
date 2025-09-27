# AutoSlot

# AutoSlot – AI-Powered Timetable Generator

[![Hackathon](https://img.shields.io/badge/Smart%20India%20Hackathon-2025-orange)](https://www.sih.gov.in/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

AutoSlot is an **AI-powered timetable generator** designed to simplify workload management for educational institutions.  
Built as part of **Smart India Hackathon 2025**, AutoSlot automates conflict-free scheduling, provides intelligent editing with natural language, and enables smooth collaboration between admins, faculty, and students.

---

## 🚀 Features

### Core Features
- **Automated Timetable Generation** – AI/ML-driven conflict-free scheduling.
- **Manual Timetable Editing** – Admin override & drag-and-drop adjustments.
- **Swap/Take Period Requests** – Faculty-initiated session swaps & takeovers.
- **Leave Requests** – Faculty leave submissions with auto-resolution.
- **IT Support Requests** – Report & track technical issues.
- **Role-Based Dashboards** – Super admin, college admin, faculty views.
- **Notifications** – Email, WhatsApp, PDF, and Excel alerts.
- **Export Timetables** – Download timetables in PDF/Excel format.
- **Student Data Management** – Enrollments, electives, credits.
- **Faculty Data Management** – Availability, workload, expertise.
- **Course & Curriculum Management** – Program structure, credits, theory/practical.
- **Room/Lab Management** – Availability, capacity, and type.
- **Exceptional Rules Input** – Admin-defined constraints & priorities.
- **Analytics & Reports** – Faculty load, room utilization, conflict analysis.
- **Audit Logs** – Track edits, requests, and notifications.
- **Multi-College Support** – Scale to state/district levels.
- **Scenario Simulation** – Test timetable changes before publishing.
- **Responsive UI** – Desktop and tablet-friendly design.
- **Color-Coded Timetables** – Visual clarity for sessions & exceptions.

### Advanced AI-Powered Features
- **LLM-Powered Timetable Editing**  
  Use natural language prompts to modify timetables (e.g., *“Move electives to afternoon”*).  
  Auto-validated by the Constraint Programming (CP) engine.
  
- **Syllabus Duration Management with LLM**  
  Extract topic hours from syllabus documents and dynamically generate timetables ensuring full coverage within available sessions (adjusts for holidays).

- **AI-Driven Document Upload & Structuring**  
  Upload syllabi, faculty data, and calendars in any format.  
  The AI pipeline converts them into structured PostgreSQL data instantly, eliminating manual entry.

---

## 🛠️ Tech Stack

- **Frontend**: React + TypeScript  
- **Backend**: Express.js + TypeScript  
- **Workflow Automation**: n8n + Python scripts  
- **Database**: PostgreSQL  
- **AI/ML**: Constraint Programming Engine + LLMs  
- **Notifications**: Email, WhatsApp, Google APIs  

---

## ⚙️ Architecture

Frontend (React + TS)  <––>  Backend (Express + TS)  <––>  PostgreSQL
|                                |                          |
|                                |                          |
+——> n8n Workflow + Python Scripts + Constraint Engine <-+

- Admin, teachers, and students interact via role-based dashboards.  
- Timetable rules and requests are processed through the **Constraint Programming Engine**.  
- Notifications and exports are generated automatically via connected services.  

---

## 📂 Repository

GitHub: [AutoSlot](https://github.com/Mandalorian7773/AutoSlot.git)

This repository contains the **prototype implementation** of AutoSlot for SIH 2025 submission.
