import { createRoute } from 'honox/factory'
import App from "../islands/App";

export default createRoute((c) => {
  return c.render(<App />, { title: "App" });
})
