import {render} from "@testing-library/react"; 
import App from "./App";  

describe(App, () => {
    it("counter displays correctly", () => {
        const {getByTestId} = render(<App counter={0}/>)
        const countValue = Number(getByTestId("count").textContent);
        expect(countValue).toEqual(0)
    })
})
