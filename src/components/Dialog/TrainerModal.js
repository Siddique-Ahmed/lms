"use client";
import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function TrainerModal() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = true;

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Add Trainers</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[525px] min-h-[80vh] p-4 sm:min-h-screen">
          <DialogHeader>
            <DialogTitle>Add Trainers</DialogTitle>
          </DialogHeader>
          <TrainerForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">Add Trainers</Button>
      </DrawerTrigger>
      <DrawerContent className="w-full max-w-[600px]">
        <DrawerHeader className="text-left">
          <DrawerTitle>Add Trainers</DrawerTitle>
        </DrawerHeader>
        <TrainerForm className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function TrainerForm({ className }) {
  return (
    <form
      className={cn(
        "grid items-start gap-4 max-h-[500px] overflow-y-auto sm:max-h-[80vh]",
        className
      )}
    >
      <div className="grid gap-2">
        <Label htmlFor="trainerID">Trainer Id</Label>
        <Input required type="text" id="trainerID" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="firstName">First Name</Label>
        <Input required type="text" id="firstName" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="lastName">Last Name</Label>
        <Input required type="text" id="lastName" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="qualification">Qualification</Label>
        <Input required type="text" id="qualification" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="CNIC">CNIC</Label>
        <Input required type="text" id="CNIC" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input required type="email" id="email" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="profilePicture">Profile Picture</Label>
        <Input required type="file" id="profilePicture" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="address">Address</Label>
        <Input required type="text" id="address" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="gender">Gender</Label>
        <Select required>
          <SelectTrigger>
            <SelectValue placeholder="Male - Female" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem>Male</SelectItem>
            <SelectItem>Female</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="role">Role</Label>
        <Select required>
          <SelectTrigger>
            <SelectValue placeholder="Trainer" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem>Trainer</SelectItem>
            <SelectItem>Student</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button type="submit" className="w-full sm:w-auto">
        Add Batch
      </Button>
    </form>
  );
}
