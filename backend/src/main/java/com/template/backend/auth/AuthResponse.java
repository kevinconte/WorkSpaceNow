package com.template.backend.auth;

public record AuthResponse(boolean success, String message, String email) {}
