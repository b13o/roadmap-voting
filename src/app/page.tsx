import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

export default function Home() {
  return (
    <div className="p-8 space-y-6">
      {/* Button */}
      <Button>Click me</Button>
      {/* Dialog */}
      <Dialog>
        <DialogTrigger asChild>
          <Button>Open Dialog</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogTitle>Dialog Title</DialogTitle>
          <p className="mt-2">This is a simple dialog example.</p>
        </DialogContent>
      </Dialog>
      {/* Dropdown Menu */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>Open Menu</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Item 1</DropdownMenuItem>
          <DropdownMenuItem>Item 2</DropdownMenuItem>
          <DropdownMenuItem>Item 3</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      {/* Input with Label */}
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" placeholder="Enter your email" />
      </div>
      {/* Textarea with Label */}
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Textarea with Label</h2>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" placeholder="Type your message here" />
        </div>
      </div>
    </div>
  );
}
