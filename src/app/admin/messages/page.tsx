"use client";

import React, { useState, useEffect } from "react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import {
  Lock,
  Mail,
  Phone,
  Calendar,
  Trash2,
  Search,
  RefreshCw,
  MessageCircle,
  ShieldCheck,
  CheckCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface MessageItem {
  id: string;
  name: string;
  email: string;
  phone?: string | null;
  message: string;
  createdAt: string;
}

export default function AdminMessagesPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [authError, setAuthError] = useState("");
  const [messages, setMessages] = useState<MessageItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [adminKey, setAdminKey] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError("");
    setLoading(true);

    try {
      const res = await fetch(`/api/admin/messages?key=${encodeURIComponent(passwordInput)}`);
      const data = await res.json();

      if (res.ok && data.success) {
        setIsAuthenticated(true);
        setAdminKey(passwordInput);
        setMessages(data.messages || []);
      } else {
        setAuthError("Incorrect password. Please try again.");
      }
    } catch (err) {
      setAuthError("Network connection error.");
    } finally {
      setLoading(false);
    }
  };

  const fetchMessages = async () => {
    if (!adminKey) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/messages?key=${encodeURIComponent(adminKey)}`);
      const data = await res.json();
      if (res.ok && data.success) {
        setMessages(data.messages || []);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this message record?")) return;
    try {
      const res = await fetch(`/api/admin/messages?key=${encodeURIComponent(adminKey)}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      if (res.ok) {
        setMessages((prev) => prev.filter((m) => m.id !== id));
      }
    } catch (err) {
      console.error(err);
    }
  };

  const filteredMessages = messages.filter(
    (m) =>
      m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.message.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (m.phone && m.phone.includes(searchQuery))
  );

  return (
    <div className="min-h-[85vh] bg-[#0A0A0A] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {!isAuthenticated ? (
          /* Login Screen */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-md mx-auto mt-12 rounded-3xl bg-[#111113] border border-white/15 p-8 text-center shadow-2xl space-y-6"
          >
            <div className="flex justify-center">
              <div className="w-14 h-14 rounded-2xl bg-[#5B2EE8]/20 border border-[#5B2EE8]/40 flex items-center justify-center text-[#5B2EE8]">
                <ShieldCheck className="w-7 h-7" />
              </div>
            </div>

            <div>
              <h1 className="font-display font-black text-2xl text-white uppercase tracking-wide">
                FOUNDER PORTAL
              </h1>
              <p className="text-xs text-[#A0A0A0] mt-1">
                Enter your MaximumPixel studio master password to view client inquiries.
              </p>
            </div>

            {authError && (
              <div className="p-3 rounded-xl bg-red-500/15 border border-red-500/30 text-xs text-red-300">
                {authError}
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4">
              <div className="relative">
                <input
                  type="password"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  placeholder="Master Password"
                  required
                  className="w-full px-4 py-3.5 rounded-xl bg-[#18181B] border border-white/10 text-white placeholder:text-[#666] focus:outline-none focus:border-[#5B2EE8] text-sm"
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                size="md"
                fullWidth
                isLoading={loading}
              >
                Access Inquiries
              </Button>
            </form>

            <p className="text-[11px] text-[#666]">
              Default access: <code className="text-[#A0A0A0]">maximumpixel2025</code>
            </p>
          </motion.div>
        ) : (
          /* Inquiries Dashboard */
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <div className="flex items-center gap-2 text-xs text-[#22B14C] font-bold uppercase tracking-wider mb-1">
                  <span className="w-2 h-2 rounded-full bg-[#22B14C] animate-pulse" />
                  <span>Founder Dashboard</span>
                </div>
                <h1 className="font-display font-black text-2xl sm:text-3xl text-white uppercase">
                  CLIENT INQUIRIES ({messages.length})
                </h1>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={fetchMessages}
                  disabled={loading}
                  className="p-2.5 rounded-xl bg-white/[0.06] hover:bg-white/10 text-white transition-colors flex items-center gap-1.5 text-xs font-semibold"
                >
                  <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
                  <span>Refresh</span>
                </button>
                <button
                  onClick={() => setIsAuthenticated(false)}
                  className="px-4 py-2.5 rounded-xl bg-red-500/20 hover:bg-red-500/30 text-red-300 text-xs font-bold transition-colors"
                >
                  Logout
                </button>
              </div>
            </div>

            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-[#A0A0A0] absolute left-4 top-3.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search inquiries by client name, email, phone, or project scope..."
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#111113] border border-white/10 text-white placeholder:text-[#666] focus:outline-none focus:border-[#5B2EE8] text-sm"
              />
            </div>

            {/* Messages List */}
            {filteredMessages.length === 0 ? (
              <div className="rounded-2xl bg-[#111113] border border-white/[0.08] p-12 text-center text-[#A0A0A0] space-y-2">
                <p className="font-display font-black text-lg text-white">No inquiries found</p>
                <p className="text-xs">Any new messages submitted on the Contact form will appear here in real-time.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredMessages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="rounded-2xl bg-[#111113] border border-white/[0.08] p-5 sm:p-6 transition-all hover:border-white/20 shadow-md space-y-4"
                  >
                    {/* Top Row: Name, Date, Actions */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/[0.06] pb-3">
                      <div>
                        <h3 className="font-display font-black text-lg text-white">
                          {msg.name}
                        </h3>
                        <div className="flex items-center gap-2 text-xs text-[#A0A0A0] mt-0.5">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>
                            {new Date(msg.createdAt).toLocaleDateString("en-IN", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        {/* Quick WhatsApp Reply */}
                        {msg.phone && (
                          <a
                            href={`https://wa.me/${msg.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(`Hi ${msg.name}, Krishna from MaximumPixel here regarding your project inquiry!`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1.5 rounded-lg bg-[#22B14C]/20 hover:bg-[#22B14C]/30 text-[#22B14C] text-xs font-bold flex items-center gap-1.5 transition-colors"
                          >
                            <MessageCircle className="w-3.5 h-3.5" />
                            <span>WhatsApp</span>
                          </a>
                        )}

                        {/* Quick Email Reply */}
                        <a
                          href={`mailto:${msg.email}?subject=${encodeURIComponent("MaximumPixel Studio - Project Discussion")}`}
                          className="px-3 py-1.5 rounded-lg bg-[#1E7FE0]/20 hover:bg-[#1E7FE0]/30 text-[#1E7FE0] text-xs font-bold flex items-center gap-1.5 transition-colors"
                        >
                          <Mail className="w-3.5 h-3.5" />
                          <span>Email</span>
                        </a>

                        {/* Delete Button */}
                        <button
                          onClick={() => handleDelete(msg.id)}
                          className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-red-500/20 text-[#888] hover:text-red-400 transition-colors"
                          aria-label="Delete inquiry"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Client Contacts */}
                    <div className="flex flex-wrap gap-4 text-xs">
                      <span className="flex items-center gap-1.5 text-[#A0A0A0]">
                        <Mail className="w-3.5 h-3.5 text-[#5B2EE8]" />
                        <span className="text-white">{msg.email}</span>
                      </span>
                      {msg.phone && (
                        <span className="flex items-center gap-1.5 text-[#A0A0A0]">
                          <Phone className="w-3.5 h-3.5 text-[#22B14C]" />
                          <span className="text-white">{msg.phone}</span>
                        </span>
                      )}
                    </div>

                    {/* Message Body */}
                    <div className="bg-[#18181B] p-4 rounded-xl text-sm text-[#E0E0E0] leading-relaxed whitespace-pre-wrap">
                      {msg.message}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
}
