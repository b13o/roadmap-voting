"use client";

import { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type NewFeatureModalProps = {
  action: (formData: FormData) => void;
};

function NewFeatureModal({ action }: NewFeatureModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="bg-emerald-500 hover:bg-emerald-600 text-white font-mono text-sm"
      >
        + 追加する
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="bg-gray-800 text-white">
          <DialogHeader>
            <DialogTitle className="text-lg font-medium text-white">
              リクエスト ✨
            </DialogTitle>
          </DialogHeader>

          {/* form から action を渡す */}
          <form
            className="space-y-4"
            // action={action}
            action={(formData) => {
              action(formData);
              setIsOpen(false);
            }}
          >
            <div className="space-y-2">
              <Label htmlFor="title" className="text-gray-400">
                タイトル
              </Label>
              <Input
                required
                name="title"
                id="title"
                placeholder="ex: 〇〇機能の追加"
                className="bg-gray-700 border-gray-600 text-white font-mono text-sm"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description" className="text-gray-400">
                概要
              </Label>
              <Textarea
                required
                id="description"
                name="description"
                placeholder="ex: xxのために、〇〇機能を追加するのはどうですか？"
                rows={4}
                className="bg-gray-700 border-gray-600 text-white font-mono text-sm"
              />
            </div>
            <div className="flex justify-end">
              <DialogClose asChild>
                <Button
                  type="submit"
                  className="bg-emerald-500 hover:bg-emerald-600 text-white font-mono text-sm"
                >
                  追加する
                </Button>
              </DialogClose>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default NewFeatureModal;
