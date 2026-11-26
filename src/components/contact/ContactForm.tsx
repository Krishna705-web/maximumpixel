"use client";

import React, { useState, useEffect } from "react";
import { CheckCircle2, AlertCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";

const PROJECT_TYPES = [
  "Video Production",
  "Video Editing",
  "Complete Shoot + Edit",
  "Creative Direction",
  "Product / Lifestyle Photography",
  "Monthly Package",
] as const;

const BUDGET_RANGES = [
  "Prefer to discuss",
  "Under ₹5,000",
  "₹5,000 – ₹15,000",
  "₹15,000 – ₹30,000",
  "₹30,000+",
] as const;

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    projectType: "Complete Shoot + Edit",
    expectedDate: "",
    budgetRange: "Prefer to discuss",
    message: "",
    hp: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const srv = params.get("service");
    const project = params.get("project");

    if (srv) {
      const matched = PROJECT_TYPES.find(
        (type) =>
          type.toLowerCase().includes(srv.toLowerCase()) ||
          srv.toLowerCase().includes(type.toLowerCase())
      );
      if (matched) {
        setFormData((prev) => ({ ...prev, projectType: matched }));
      }
    }

    if (project) {
      setFormData((prev) =>
        prev.message
          ? prev
          : {
              ...prev,
              message: `I would like to discuss a project similar to "${project}".`,
            }
      );
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFeedback("");

    if (!formData.name.trim()) {
      setStatus("error");
      setFeedback("Please enter your full name.");
      return;
    }

    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      setStatus("error");
      setFeedback("Please enter a valid email address.");
      return;
    }

    if (formData.phone.trim() && formData.phone.trim().length < 7) {
      setStatus("error");
      setFeedback("Please enter a valid phone or WhatsApp number.");
      return;
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      setStatus("error");
      setFeedback("Please share a brief description of your project (at least 10 characters).");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setFeedback(
          data.message ||
            "Your inquiry has been received. Our team will review your brief and reply shortly."
        );
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          projectType: "Complete Shoot + Edit",
          expectedDate: "",
          budgetRange: "Prefer to discuss",
          message: "",
          hp: "",
        });
      } else {
        setStatus("error");
        setFeedback(data.error || "Unable to send your inquiry right now. Please try again.");
      }
    } catch {
      setStatus("error");
      setFeedback(
        "Network error while submitting. You can also reach us directly via WhatsApp or email."
      );
    }
  };

  const inputClasses =
    "w-full px-4 py-3 bg-[#F4F3EF] border border-[#DAD8D1] rounded-[2px] text-sm text-[#171717] placeholder-[#777873]/70 focus:outline-none focus:border-[#171717] transition-colors";
  const labelClasses =
    "block text-[11px] font-medium uppercase tracking-[0.14em] text-[#777873] mb-2";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Honeypot field */}
      <input
        type="text"
        name="hp"
        value={formData.hp}
        onChange={handleChange}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      {status === "success" && (
        <div
          role="status"
          className="p-4 border border-[#171717] bg-[#F4F3EF] text-[#171717] rounded-[2px] flex items-start gap-3"
        >
          <CheckCircle2 className="w-5 h-5 text-[#A78B70] shrink-0 mt-0.5" />
          <p className="text-sm leading-relaxed">{feedback}</p>
        </div>
      )}

      {status === "error" && (
        <div
          role="alert"
          className="p-4 border border-[#9B2C2C] bg-[#FFF5F5] text-[#742A2A] rounded-[2px] flex items-start gap-3"
        >
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <p className="text-sm leading-relaxed">{feedback}</p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-name" className={labelClasses}>
            Name *
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="contact-company" className={labelClasses}>
            Business or Brand Name
          </label>
          <input
            id="contact-company"
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Brand, cafe or company"
            className={inputClasses}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-email" className={labelClasses}>
            Email *
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="you@brand.com"
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="contact-phone" className={labelClasses}>
            Phone / WhatsApp Number
          </label>
          <input
            id="contact-phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            className={inputClasses}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div>
          <label htmlFor="contact-type" className={labelClasses}>
            Project Type *
          </label>
          <select
            id="contact-type"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className={inputClasses}
          >
            {PROJECT_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="contact-date" className={labelClasses}>
            Expected Date
          </label>
          <input
            id="contact-date"
            type="text"
            name="expectedDate"
            value={formData.expectedDate}
            onChange={handleChange}
            placeholder="e.g. Early Dec 2026"
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="contact-budget" className={labelClasses}>
            Budget Range (Optional)
          </label>
          <select
            id="contact-budget"
            name="budgetRange"
            value={formData.budgetRange}
            onChange={handleChange}
            className={inputClasses}
          >
            {BUDGET_RANGES.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className={labelClasses}>
          Project Description *
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Share what you are looking to shoot or edit, deliverables needed, location in Jaipur, or reference links..."
          className={`${inputClasses} resize-y`}
        />
      </div>

      <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <p className="text-xs text-[#777873]">
          Protected against automated spam. See our{" "}
          <a href="/privacy-policy" className="underline hover:text-[#171717]">
            Privacy Policy
          </a>
          .
        </p>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={status === "loading"}
          isLoading={status === "loading"}
        >
          <span>Send Project Inquiry</span>
          <Send className="w-3.5 h-3.5" />
        </Button>
      </div>
    </form>
  );
};

