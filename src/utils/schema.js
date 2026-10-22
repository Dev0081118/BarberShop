export const validateConfig = (config) => {
  if (!config) {
    return { valid: false, error: "Configuration is missing" };
  }

  const requiredFields = ["slug", "businessName", "hero"];

  for (const field of requiredFields) {
    if (!config[field]) {
      return { valid: false, error: `Missing required field: ${field}` };
    }
  }

  // Validate hero structure
  if (!config.hero.titleLine1 || !config.hero.image) {
    return { valid: false, error: "Hero must contain titleLine1 and image" };
  }

  return { valid: true, config };
};
