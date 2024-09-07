import { renderHook } from "@testing-library/react-hooks";
import useMonitor from "../hooks/useMonitor";

describe("useMonitor hook", () => {
  test("should clear interval on unmount", () => {
    const { unmount } = renderHook(() => useMonitor());
    jest.spyOn(global, "clearInterval");

    unmount(); // Unmount the hook

    expect(clearInterval).toHaveBeenCalledTimes(1); // Ensure clearInterval was called
  });
});
