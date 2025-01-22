export {};

// Define roles as a union type
export type Roles = "admin" | "moderator" | "user";

declare global {
  interface CustomJwtSessionClaims {
    metadata: {
      role?: Roles; // Optional role field
    };
  }
}
