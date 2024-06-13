import { useState, DragEvent } from "react";
import { motion } from "framer-motion";
import LetteredAvatar from "react-lettered-avatar";
import { AddCard } from "../AddCard/AddCard";
import {
  CardType,
  ColumnProps,
  lowPriorityIcon,
  mediumPriorityIcon,
  highPriorityIcon,
  CardProps,
  DropIndicatorProps,
} from "../../contants/Constants";
import "./Column.css";

export const Column = ({
  title,
  headingColor,
  cards,
  column,
  setCards,
  icon: Icon,
}: ColumnProps) => {
  const [active, setActive] = useState(false);
  const [priority, setPriority] = useState("high");
  const [assignId, setAssign] = useState(1);

  const handleDragStart = (e: DragEvent, card: CardType) => {
    e.dataTransfer.setData("cardId", card.id);
  };

  const handleDragEnd = (e: DragEvent) => {
    const cardId = e.dataTransfer.getData("cardId");

    setActive(false);
    clearHighlights();

    const indicators = getIndicators();
    const { element } = getNearestIndicator(e, indicators);

    const before = element.dataset.before || "-1";

    if (before !== cardId) {
      let copy = [...cards];

      let cardToTransfer = copy.find((c) => c.id === cardId);
      if (!cardToTransfer) return;
      cardToTransfer = { ...cardToTransfer, column };

      copy = copy.filter((c) => c.id !== cardId);

      const moveToBack = before === "-1";

      if (moveToBack) {
        copy.push(cardToTransfer);
      } else {
        const insertAtIndex = copy.findIndex((el) => el.id === before);
        if (insertAtIndex === undefined) return;

        copy.splice(insertAtIndex, 0, cardToTransfer);
      }

      setCards(copy);
    }
  };

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
    highlightIndicator(e);

    setActive(true);
  };

  const clearHighlights = (els?: HTMLElement[]) => {
    const indicators = els || getIndicators();

    indicators.forEach((i) => {
      i.style.opacity = "0";
    });
  };

  const highlightIndicator = (e: DragEvent) => {
    const indicators = getIndicators();

    clearHighlights(indicators);

    const el = getNearestIndicator(e, indicators);

    el.element.style.opacity = "1";
  };

  const getNearestIndicator = (e: DragEvent, indicators: HTMLElement[]) => {
    const DISTANCE_OFFSET = 50;

    const el = indicators.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();

        const offset = e.clientY - (box.top + DISTANCE_OFFSET);

        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child };
        } else {
          return closest;
        }
      },
      {
        offset: Number.NEGATIVE_INFINITY,
        element: indicators[indicators.length - 1],
      }
    );

    return el;
  };

  const getIndicators = () => {
    return Array.from(
      document.querySelectorAll(
        `[data-column="${column}"]`
      ) as unknown as HTMLElement[]
    );
  };

  const handleDragLeave = () => {
    clearHighlights();
    setActive(false);
  };

  const filteredCards = cards.filter((c) => c.column === column);

  return (
    <div className="w-56 shrink-0">
      <div className="mb-3 flex items-center justify-between">
        <span className="flex flex-row items-center justify-between">
          <span className="pr-2">
            <Icon />
          </span>
          <h3 className={`font-medium ${headingColor}`}>{title}</h3>
        </span>

        <span className="rounded text-sm text-neutral-400">
          {filteredCards.length}
        </span>
      </div>
      <div
        onDrop={handleDragEnd}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`h-full w-full transition-colors ${
          active ? "bg-neutral-800/50" : "bg-neutral-800/0"
        }`}
      >
        {filteredCards.map((c) => {
          return <Card key={c.id} {...c} handleDragStart={handleDragStart} />;
        })}
        <DropIndicator beforeId={null} column={column} />
        <AddCard
          column={column}
          setCards={setCards}
          priority={priority}
          setPriority={setPriority}
          assignId={assignId}
          setAssign={setAssign}
        />
      </div>
    </div>
  );
};

const Card = ({
  title,
  id,
  column,
  handleDragStart,
  priority,
  assignId,
}: CardProps) => {
  return (
    <>
      <DropIndicator beforeId={id} column={column} />
      <motion.div
        layout
        layoutId={id}
        draggable="true"
        onDragStart={(e) => handleDragStart(e, { title, id, column })}
        className="cursor-grab rounded border border-neutral-700 bg-neutral-800 p-3 active:cursor-grabbing "
      >
        <p className="text-sm text-neutral-100">{title}</p>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row justify-between mt-2">
            <div className="flex gap-2">
              {priority === "high" && highPriorityIcon}
              {priority === "medium" && mediumPriorityIcon}
              {priority === "low" && lowPriorityIcon}
            </div>
          </div>
          <div className="flex mt-2">
            {assignId == 1 && (
              <LetteredAvatar
                name="Anush Shinde"
                size={30}
                color="#fff"
                backgroundColor="#008080"
              />
            )}
            {assignId == 2 && (
              <LetteredAvatar
                name="Harry Potter"
                size={30}
                color="#fff"
                backgroundColor="#FF5733"
              />
            )}
            {assignId == 3 && (
              <LetteredAvatar
                name="Lord Voldmart"
                size={30}
                color="#fff"
                backgroundColor="#581845"
              />
            )}
            {assignId == 4 && (
              <LetteredAvatar
                name="Ron Weasley"
                size={30}
                color="#fff"
                backgroundColor="#6495ED"
              />
            )}
            {assignId == 5 && (
              <LetteredAvatar
                name="H G "
                size={30}
                color="#fff"
                backgroundColor="#ee82ee"
              />
            )}
          </div>
        </div>
      </motion.div>
    </>
  );
};

const DropIndicator = ({ beforeId, column }: DropIndicatorProps) => {
  return (
    <div
      data-before={beforeId || "-1"}
      data-column={column}
      className="my-0.5 h-0.5 w-full bg-violet-400 opacity-0"
    />
  );
};
