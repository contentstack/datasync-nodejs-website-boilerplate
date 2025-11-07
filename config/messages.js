/**
 * Centralized messages for the application
 * Includes error messages, success messages, and informational messages
 */

module.exports = {
  // Success Messages
  success: {
    contentstackConnected: 'Contentstack connection established.',
  },

  // Error Messages
  errors: {
    // Server errors
    portElevatedPrivileges: (bind) => `Error: ${bind} requires elevated privileges. Try running with sudo or use a port above 1024.`,
    portInUse: (bind) => `Error: ${bind} is already in use. Please stop the other process or use a different port.`,
    
    // Rate limiting
    rateLimitExceeded: 'Too many requests from this IP, please try again after 15 minutes.',
    
    // Generic errors
    notFound: 'The requested resource was not found.',
    internalServerError: 'An internal server error occurred.',
  },

  // Informational Messages
  info: {
    serverStarting: (port) => `Server starting on port ${port}`,
    serverListening: (bind) => `Listening on ${bind}`,
  }
}

