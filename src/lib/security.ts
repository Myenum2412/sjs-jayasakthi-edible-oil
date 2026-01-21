/**
 * Security utilities for input sanitization and XSS protection
 */

/**
 * Sanitizes HTML input to prevent XSS attacks
 */
export function sanitizeHtml(html: string): string {
  if (typeof html !== 'string') return '';
  
  return html
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

/**
 * Sanitizes user input by removing potentially dangerous characters
 */
export function sanitizeInput(input: string): string {
  if (typeof input !== 'string') return '';
  
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove angle brackets
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
    .replace(/[\x00-\x1F\x7F]/g, ''); // Remove control characters
}

/**
 * Validates and sanitizes email address
 */
export function sanitizeEmail(email: string): string {
  if (typeof email !== 'string') return '';
  
  const sanitized = email.trim().toLowerCase();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!emailRegex.test(sanitized)) {
    return '';
  }
  
  return sanitized;
}

/**
 * Validates and sanitizes phone number (Indian format)
 */
export function sanitizePhone(phone: string): string {
  if (typeof phone !== 'string') return '';
  
  // Remove all non-digit characters
  const cleaned = phone.replace(/\D/g, '');
  
  // Validate Indian phone number (10 digits, optionally with country code)
  if (cleaned.length === 10 || (cleaned.length === 12 && cleaned.startsWith('91'))) {
    return cleaned.length === 12 ? cleaned : `91${cleaned}`;
  }
  
  return phone; // Return original if validation fails
}

/**
 * Sanitizes URL to prevent malicious redirects
 */
export function sanitizeUrl(url: string): string {
  if (typeof url !== 'string') return '';
  
  try {
    const parsed = new URL(url);
    
    // Only allow http and https protocols
    if (!['http:', 'https:'].includes(parsed.protocol)) {
      return '';
    }
    
    return parsed.toString();
  } catch {
    // If URL parsing fails, return empty string
    return '';
  }
}

/**
 * Escapes special characters for use in regular expressions
 */
export function escapeRegex(str: string): string {
  if (typeof str !== 'string') return '';
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Validates CSRF token (basic implementation)
 */
export function validateCsrfToken(token: string | null, sessionToken: string | null): boolean {
  if (!token || !sessionToken) return false;
  return token === sessionToken;
}
