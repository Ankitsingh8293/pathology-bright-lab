import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Calendar, Clock } from "lucide-react";
import { toast } from "sonner";

interface BookAppointmentDialogProps {
  trigger?: React.ReactNode;
}

const BookAppointmentDialog = ({ trigger }: BookAppointmentDialogProps) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
  });

  // Time slot selection state
  const [selectedSlot, setSelectedSlot] = useState<string>("morning");
  const [timeSlots] = useState({
    morning: { start: "08:00", end: "14:00", label: "Morning" },
    evening: { start: "17:00", end: "22:00", label: "Evening" },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.phone || !formData.preferredDate || !formData.preferredTime) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Phone validation (10 digits)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phone.replace(/\D/g, ''))) {
      toast.error("Please enter a valid 10-digit phone number");
      return;
    }

    // Success
    toast.success("Appointment booked successfully! We'll contact you soon.");
    
    // Reset form and close dialog
    setFormData({
      name: "",
      phone: "",
      preferredDate: "",
      preferredTime: "",
      message: "",
    });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="hero" size="sm">
            Book Appointment
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Book Your Appointment</DialogTitle>
          <DialogDescription>
            Fill in the details below and we'll get back to you shortly
          </DialogDescription>
        </DialogHeader>

        {/* Time Slot Selection */}
        <div className="bg-secondary/30 border border-border rounded-lg p-4">
          <ToggleGroup
            type="single"
            value={selectedSlot}
            onValueChange={(value) => value && setSelectedSlot(value)}
            className="grid grid-cols-2 gap-3 w-full"
          >
            <ToggleGroupItem
              value="morning"
              className="flex-col h-auto py-3 px-4 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground data-[state=on]:border-primary border-2 transition-all duration-200"
            >
              <span className="font-semibold text-sm">{timeSlots.morning.label}</span>
              <span className="text-xs mt-1">
                {timeSlots.morning.start} – {timeSlots.morning.end}
              </span>
            </ToggleGroupItem>

            <ToggleGroupItem
              value="evening"
              className="flex-col h-auto py-3 px-4 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground data-[state=on]:border-primary border-2 transition-all duration-200"
            >
              <span className="font-semibold text-sm">{timeSlots.evening.label}</span>
              <span className="text-xs mt-1">
                {timeSlots.evening.start} – {timeSlots.evening.end}
              </span>
            </ToggleGroupItem>
          </ToggleGroup>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="Enter 10-digit number"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="preferredDate">Preferred Date *</Label>
              <div className="relative">
                <Input
                  id="preferredDate"
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  min={new Date().toISOString().split('T')[0]}
                  required
                  className="pl-10"
                />
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="preferredTime">Preferred Time *</Label>
              <div className="relative">
                <Input
                  id="preferredTime"
                  type="time"
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  required
                  className="pl-10"
                />
                <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Additional Message (Optional)</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Any specific requirements or questions?"
              rows={3}
            />
          </div>

          <Button type="submit" variant="hero" size="lg" className="w-full">
            Submit Appointment
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookAppointmentDialog;
