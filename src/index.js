import dotenv from "dotenv";
dotenv.config();

import { setupServer } from "./server.js";

const PORT = process.env.PORT || 3000;

(async () => {
  const app = await setupServer();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})();
