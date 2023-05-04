import { HelloProps } from "./types/FormDataTypes"
export const Hello = ({firstName, lastName, age}:HelloProps) => {
// export const Hello = ({firstName, lastName}:any) => {
    return(
        <>
            <h1>
                Good Morning, {firstName} {lastName} 
            </h1>
        </>
    )
}
