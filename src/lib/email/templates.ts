import type { ContactFormData } from "@/lib/validations/contact";
import type { QuoteFormData } from "@/lib/validations/quote";

const BRAND = {
  primary: "#8c001d",
  dark: "#111111",
  muted: "#6b7280",
  border: "#e5e7eb",
  panel: "#f9fafb",
  white: "#ffffff",
} as const;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function emailShell(content: string, title: string, subtitle: string) {
  return `
  <div style="margin:0;background:#f3f4f6;padding:24px;font-family:Segoe UI,Arial,sans-serif;color:${BRAND.dark};">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:680px;margin:0 auto;background:${BRAND.white};border:1px solid ${BRAND.border};border-radius:12px;overflow:hidden;">
      <tr>
        <td style="background:${BRAND.primary};padding:20px 24px;color:${BRAND.white};">
          <div style="font-size:12px;letter-spacing:1px;text-transform:uppercase;font-weight:700;opacity:0.9;">G3-Biz Ltd</div>
          <h1 style="margin:8px 0 4px;font-size:22px;line-height:1.25;">${title}</h1>
          <p style="margin:0;font-size:14px;opacity:0.9;">${subtitle}</p>
        </td>
      </tr>
      <tr>
        <td style="padding:24px;">${content}</td>
      </tr>
      <tr>
        <td style="padding:14px 24px;border-top:1px solid ${BRAND.border};font-size:12px;color:${BRAND.muted};">
          Global Strategic Business Company (G3-Biz Ltd), Mile 2 Limbe, Cameroon
        </td>
      </tr>
    </table>
  </div>`;
}

function kv(label: string, value: string) {
  return `
    <tr>
      <td style="padding:10px 12px;border:1px solid ${BRAND.border};background:${BRAND.panel};font-weight:600;width:180px;">${label}</td>
      <td style="padding:10px 12px;border:1px solid ${BRAND.border};">${escapeHtml(value)}</td>
    </tr>`;
}

export function buildContactAdminTemplate(data: ContactFormData) {
  const content = `
    <p style="margin:0 0 16px;font-size:15px;">A new contact form submission was received on the website.</p>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;font-size:14px;">
      ${kv("Name", data.name)}
      ${kv("Email", data.email)}
      ${kv("Subject", data.subject)}
      ${kv("Message", data.message)}
    </table>`;

  return {
    subject: `New Contact Form: ${data.subject}`,
    html: emailShell(content, "New Contact Request", "Admin Notification"),
    text: `New contact form submission\n\nName: ${data.name}\nEmail: ${data.email}\nSubject: ${data.subject}\nMessage: ${data.message}`,
  };
}

export function buildContactClientTemplate(data: ContactFormData) {
  const content = `
    <p style="margin:0 0 12px;font-size:15px;">Hi ${escapeHtml(data.name)},</p>
    <p style="margin:0 0 14px;font-size:15px;">Thank you for reaching out to G3-Biz Ltd. We received your message and our team will reply shortly.</p>
    <div style="padding:14px;border:1px solid ${BRAND.border};border-radius:8px;background:${BRAND.panel};">
      <p style="margin:0 0 8px;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.4px;color:${BRAND.muted};">Your message summary</p>
      <p style="margin:0 0 6px;font-size:14px;"><strong>Subject:</strong> ${escapeHtml(data.subject)}</p>
      <p style="margin:0;font-size:14px;"><strong>Message:</strong> ${escapeHtml(data.message)}</p>
    </div>
    <p style="margin:14px 0 0;font-size:14px;">For urgent requests, contact us at <a href="mailto:info@g3-bizltd.com" style="color:${BRAND.primary};">info@g3-bizltd.com</a>.</p>`;

  return {
    subject: "We received your message - G3-Biz Ltd",
    html: emailShell(content, "Thank You for Contacting Us", "Client Confirmation"),
    text: `Hi ${data.name},\n\nWe received your message and will respond shortly.\n\nSubject: ${data.subject}\nMessage: ${data.message}\n\nG3-Biz Ltd`,
  };
}

export function buildQuoteAdminTemplate(data: QuoteFormData) {
  const content = `
    <p style="margin:0 0 16px;font-size:15px;">A new quote enquiry was submitted on the website.</p>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;font-size:14px;">
      ${kv("Name", data.name)}
      ${kv("Email", data.email)}
      ${kv("Phone", data.phone || "Not provided")}
      ${kv("Product / Service", data.product || "Not specified")}
      ${kv("Order Details", data.message)}
    </table>`;

  return {
    subject: `New Quote Enquiry from ${data.name}`,
    html: emailShell(content, "New Quote Enquiry", "Admin Notification"),
    text: `New quote enquiry\n\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone || "Not provided"}\nProduct / Service: ${data.product || "Not specified"}\nOrder Details: ${data.message}`,
  };
}

export function buildQuoteClientTemplate(data: QuoteFormData) {
  const content = `
    <p style="margin:0 0 12px;font-size:15px;">Hi ${escapeHtml(data.name)},</p>
    <p style="margin:0 0 14px;font-size:15px;">Thank you for your quote enquiry. Our depot team will review your request and get back to you with pricing and delivery options.</p>
    <div style="padding:14px;border:1px solid ${BRAND.border};border-radius:8px;background:${BRAND.panel};">
      <p style="margin:0 0 8px;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.4px;color:${BRAND.muted};">Enquiry recap</p>
      <p style="margin:0 0 6px;font-size:14px;"><strong>Product / Service:</strong> ${escapeHtml(data.product || "Not specified")}</p>
      <p style="margin:0 0 6px;font-size:14px;"><strong>Phone:</strong> ${escapeHtml(data.phone || "Not provided")}</p>
      <p style="margin:0;font-size:14px;"><strong>Details:</strong> ${escapeHtml(data.message)}</p>
    </div>
    <p style="margin:14px 0 0;font-size:14px;">If you need to add details, reply to this email or call our team.</p>`;

  return {
    subject: "Quote Request Received - G3-Biz Ltd",
    html: emailShell(content, "Your Quote Enquiry is Received", "Client Confirmation"),
    text: `Hi ${data.name},\n\nYour quote enquiry has been received. We will respond soon.\n\nProduct / Service: ${data.product || "Not specified"}\nPhone: ${data.phone || "Not provided"}\nDetails: ${data.message}\n\nG3-Biz Ltd`,
  };
}
