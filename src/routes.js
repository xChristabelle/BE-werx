import express from "express";
import clientRoutes from "./routes/sales.js";
import generalRoutes from "./routes/general.js";
import managementRoutes from "./routes/management.js";
import salesRoutes from "./routes/sales.js";
import authenticateRoutes from "./routes/authenticate.js";
import transactionRoutes from "./routes/transaction.js";
import transactionActivityLogRoutes from "./routes/transactionActivityLog.js";
import transactionCDAFormRoutes from "./routes/transactionCDAForm.js";
import transactionContactsRoutes from "./routes/transactionContacts.js";
import transactionDetailsRoutes from "./routes/transactionDetails.js";
import transactionDocumentsRoutes from "./routes/transactionDocuments.js";
import transactionNotesRoutes from "./routes/transactionNotes.js";
import transactionScheduleRoutes from "./routes/transactionSchedule.js";
import transactionTaskRoutes from "./routes/transactionTask.js";
import transactionVideoEmailRoutes from "./routes/transactionVideoEmail.js";

const app = express();

app.use("/client", clientRoutes);
app.use("/api/general", generalRoutes);
app.use("/api/management", managementRoutes);
app.use("/api/sales", salesRoutes);
app.use("/api/authenticate", authenticateRoutes);
app.use("/api/transaction", transactionRoutes);
app.use("/api/transaction-activity-log", transactionActivityLogRoutes);
app.use("/api/transaction-cda-form", transactionCDAFormRoutes);
app.use("/api/transaction-contacts", transactionContactsRoutes);
app.use("/api/transaction-details", transactionDetailsRoutes);
app.use("/api/transaction-documents", transactionDocumentsRoutes);
app.use("/api/transaction-notes", transactionNotesRoutes);
app.use("/api/transaction-schedule", transactionScheduleRoutes);
app.use("/api/transaction-task", transactionTaskRoutes);
app.use("/api/transaction-video-email", transactionVideoEmailRoutes);

export default app;
