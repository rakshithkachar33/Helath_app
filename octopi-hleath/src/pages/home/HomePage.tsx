import AppHeader from "../../components/home/AppHeader"
import BodyPart from "../../components/home/BodyPart"
import { exercises } from "../../utils/exercise-data"

const HomePage = () => {
    const name = 'Bhavitha'

    return (
        <div>
            <AppHeader />
            <h2 className="text-xl font-medium text-sky-600">Patient Name : {name} </h2>
            <div className="grid grid-cols-4  gap-10 my-6 w-11/12 mx-auto">
                {
                    exercises.map(exercise =>
                        <BodyPart
                            key={exercise.exerciseName}
                            {...exercise}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default HomePage