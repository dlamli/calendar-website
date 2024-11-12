import calendarApi from "../../src/apis/calendarApi";
describe("Test in Calendar API", () => {
  test("should have default config", () => {
    expect(calendarApi.defaults.baseURL).toBe(process.env.VITE_API_URL);
  });

  test("should have x-token header for petition", async () => {
    localStorage.setItem("token", "ABC-123");
    try {
      const res = await calendarApi.get("/auth/renew");
      expect(res.config.headers["x-token"]).toBe("ABC-123");
    } catch (error) {
      expect(error.config.headers["x-token"]).toBe("ABC-123");
    }
  });
});
