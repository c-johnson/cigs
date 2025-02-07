/*
  Parameters:
      message: The error message.
      source: The URL of the script where the error occurred.
      lineno: The line number where the error occurred.
      colno: The column number where the error occurred.
      error: The error object itself, which contains detailed information.
*/

enum LogLevel {
  P0 = "Priority 0",
  P1 = "Priority 1",
  P2 = "Priority 2",
  P3 = "Priority 3",
  P4 = "Priority 4",
}

interface LoggingService {
  log: (message: string) => void;
  logLevel: LogLevel;
}

const loggingService: LoggingService = {
  log: () => {},
  logLevel: LogLevel.P4,
};

window.onerror = function (message, source, lineno, colno, error) {
  // TODO: Check for Typescript non-null assertion errors

  // This is a *serious* issue, if we're expecting something in the code that doesn't exist!
  // So log it to LogLevel.P0
  const isTypescriptNonNullError = true;

  // Log them to <logging-service>
  if (isTypescriptNonNullError) {
    loggingService.logLevel = LogLevel.P0;
    loggingService.log("[URGENT] -- a Typescript non-null assertion failed");
  }
};
