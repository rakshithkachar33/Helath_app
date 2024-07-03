export interface ExercisePosition {
    positionName: string,
    positionImg: string
}
export interface Exercise{
    exerciseName: string,
    image: string,
    positions: ExercisePosition[]
}