import { useState, FormEvent } from "react";
import { FiPlus } from "react-icons/fi";
import { motion } from "framer-motion";
import { AddCardProps } from "../../contants/Constants";

export const AddCard = ({
  column,
  setCards,
  priority,
  setPriority,
  assignId,
  setAssign,
}: AddCardProps) => {
  const [text, setText] = useState("");
  const [adding, setAdding] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!text.trim().length) return;

    const newCard = {
      column,
      title: text.trim(),
      id: Math.random().toString(),
      priority,
      assignId,
    };

    setCards((pv) => [...pv, newCard]);

    setAdding(false);
  };

  return (
    <>
      {adding ? (
        <motion.form layout onSubmit={handleSubmit}>
          <textarea
            onChange={(e) => setText(e.target.value)}
            autoFocus
            placeholder="Add new task..."
            className="w-full rounded border border-violet-400 bg-violet-400/20 p-3 text-sm text-neutral-50 placeholder-violet-300 focus:outline-0"
          />
          <label className="mt-2 text-sm text-neutral-50">Priority</label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="w-full mt-2 rounded border border-violet-400 bg-violet-400/20 p-2 text-sm text-neutral-50 focus:outline-0"
            style={{ color: "white" }}
          >
            <option
              value="high"
              style={{ color: "black", backgroundColor: "white" }}
            >
              High
            </option>
            <option
              value="medium"
              style={{ color: "black", backgroundColor: "white" }}
            >
              Medium
            </option>
            <option
              value="low"
              style={{ color: "black", backgroundColor: "white" }}
            >
              Low
            </option>
          </select>

          <label className="mt-2 text-sm text-neutral-50">Assign To</label>
          <select
            value={priority}
            onChange={(e) => setAssign(parseInt(e.target.value, 10))}
            className="w-full mt-2 rounded border border-violet-400 bg-violet-400/20 p-2 text-sm text-neutral-50 focus:outline-0"
            style={{ color: "white" }}
          >
            <option
              value={1}
              style={{ color: "black", backgroundColor: "white" }}
            >
              Anush Shinde
            </option>
            <option
              value={2}
              style={{ color: "black", backgroundColor: "white" }}
            >
              Harry Potter
            </option>
            <option
              value={3}
              style={{ color: "black", backgroundColor: "white" }}
            >
              Lord Voldemort
            </option>
            <option
              value={4}
              style={{ color: "black", backgroundColor: "white" }}
            >
              Ron Weasley
            </option>
            <option
              value={5}
              style={{ color: "black", backgroundColor: "white" }}
            >
              Hermione Granger
            </option>
          </select>

          <div className="mt-1.5 flex items-center justify-end gap-1.5">
            <button
              onClick={() => setAdding(false)}
              className="px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50"
            >
              Close
            </button>
            <button
              type="submit"
              className="flex items-center gap-1.5 rounded bg-neutral-50 px-3 py-1.5 text-xs text-neutral-950 transition-colors hover:bg-neutral-300"
            >
              <span>Add</span>
              <FiPlus />
            </button>
          </div>
        </motion.form>
      ) : (
        <motion.button
          layout
          onClick={() => setAdding(true)}
          className="flex w-full items-center gap-1.5 px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50"
        >
          <span>Add card</span>
          <FiPlus />
        </motion.button>
      )}
    </>
  );
};
