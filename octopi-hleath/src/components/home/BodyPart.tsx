import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";
import ExerciseModal from "./ExerciseModal";

type BodyPart = {
    exerciseName: string,
    image: string,
    positions: {
        positionName: string,
        positionImg: string
    }[]
}
const BodyPart = ({ exerciseName, image, positions }: BodyPart) => {
    const [opened, { open, close }] = useDisclosure(false);

    const handleOpenModal = () => {
        open();
    }

    return (
        <React.Fragment>
            <div className="relative border-2 w-64 border-sky-600 rounded-lg overflow-hidden">
                <img src={image} alt={exerciseName} className="object-cover  h-72" />
                <div className="absolute inset-0 bg-black/50 flex flex-col justify-end">
                    <button
                        className="mx-6 my-4 bg-transparent border border-sky-600 text-white font-semibold text-lg rounded-lg"
                        onClick={handleOpenModal}
                    >
                        Start Assessment
                    </button>
                </div>
            </div>
            <Modal
                opened={opened}
                onClose={close}
                closeOnClickOutside
                centered
                style={{
                    margin:0,
                }}
                size='lg'
            >
                <ExerciseModal
                    positions={positions}
                />
            </Modal>
        </React.Fragment>
    )
}

export default BodyPart