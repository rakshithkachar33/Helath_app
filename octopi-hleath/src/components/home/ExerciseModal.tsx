import { Switch } from '@mantine/core'
import { ExercisePosition } from '../../types'

const ExerciseModal = ({ positions }: { positions: ExercisePosition[] }) => {
    return (
        <div>
            <div className='flex justify-between items-center'>
                <h2 className='text-sky-600 text-lg font-semibold'>Select Position</h2>
                <div className='flex items-center gap-3'>
                    <span>Left</span>
                    <Switch
                        defaultChecked
                    />
                    <span>Right</span>
                </div>
            </div>
            <div>
                {
                    positions.map(({ positionImg, positionName }) =>
                        <div key={positionName}>
                            <img src={positionImg} alt={positionName} />
                            <h3>{positionName}</h3>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default ExerciseModal