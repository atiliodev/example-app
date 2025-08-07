import { createRoot } from 'react-dom/client';
import { Button } from "@/components/ui/button"

const root = createRoot(document.body);
root.render(
  <>
    <Button>Button</Button>
    <h2>Hello from React!</h2>
  </>
);