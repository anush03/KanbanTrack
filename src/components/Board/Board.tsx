import {
  Dispatch,
  SetStateAction,
  useState,
  DragEvent,
  useEffect,
} from "react";

import { FiTrash } from "react-icons/fi";
import { Column } from "../Column/Column";
import { CardType } from "../../contants/Constants";
import { FaFire } from "react-icons/fa";
import { FcProcess, FcPlanner, FcList, FcOk } from "react-icons/fc";

export const Board = ({ cardsTeam }: { cardsTeam: CardType[] }) => {
  const [cards, setCards] = useState<CardType[]>([]);

  useEffect(() => {
    setCards(cardsTeam);
  }, [cardsTeam]);

  return (
    <div className="flex h-full w-full gap-3 ml-2 p-12 justify-center flex-row">
      <Column
        title="Backlog"
        column="backlog"
        headingColor="text-neutral-500"
        cards={cards}
        setCards={setCards}
        icon={FcPlanner}
      />
      <Column
        title="TODO"
        column="todo"
        headingColor="text-yellow-200"
        cards={cards}
        setCards={setCards}
        icon={FcList}
      />
      <Column
        title="In progress"
        column="doing"
        headingColor="text-indigo-600"
        cards={cards}
        setCards={setCards}
        icon={FcProcess}
      />
      <Column
        title="Complete"
        column="done"
        headingColor="text-emerald-200"
        cards={cards}
        setCards={setCards}
        icon={FcOk}
      />
      <BurnBarrel setCards={setCards} />
    </div>
  );
};

const BurnBarrel = ({
  setCards,
}: {
  setCards: Dispatch<SetStateAction<CardType[]>>;
}) => {
  const [active, setActive] = useState(false);

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
    setActive(true);
  };

  const handleDragLeave = () => {
    setActive(false);
  };

  const handleDragEnd = (e: DragEvent) => {
    const cardId = e.dataTransfer.getData("cardId");

    setCards((pv) => pv.filter((c) => c.id !== cardId));

    setActive(false);
  };

  return (
    <div
      onDrop={handleDragEnd}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      className={`mt-10 grid h-56 w-56 shrink-0 place-content-center rounded border text-3xl ${
        active
          ? "border-red-800 bg-red-800/20 text-red-500"
          : "border-neutral-500 bg-neutral-500/20 text-neutral-500"
      }`}
    >
      {active ? <FaFire className="animate-bounce" /> : <FiTrash />}
    </div>
  );
};
