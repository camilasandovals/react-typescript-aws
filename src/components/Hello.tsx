import { HelloProps } from "./types/FormDataTypes"
export const Hello = ({firstName, lastName, age}:HelloProps) => {
// export const Hello = ({firstName, lastName}:any) => {
    return(
        <>
            <h1>
                Good Afternoon, {firstName} {lastName} 
            </h1>
        </>
    )
}
