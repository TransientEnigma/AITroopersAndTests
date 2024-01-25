import { Form } from "./components/Form";
import * as ReactDom from 'react-dom';
import { createRoot } from 'react-dom/client';

describe('Test the rendering of Form component', () => {
    // define container as HTMLDivElement
    let container:HTMLDivElement;

    // setup
    beforeEach(() => {
        // we have our container
        container = document.createElement('div');

        // append this container to our body
        document.body.appendChild(container);

        // mock the onsubmit function
        const onSubmitFn = jest.fn();

        const feedbackMessage = {
            "status":"ready"
        }

        // put the Form inside our container
        ReactDom.render(<Form onSubmit={onSubmitFn} feedback={JSON.stringify(feedbackMessage)}/>, container);

        //const root = createRoot(container);

        //root.render(<Form onSubmit={onSubmitFn} feedback={JSON.stringify(feedbackMessage)}/>)

    });

    // tear down
    afterEach(() => {
        document.body.removeChild(container);
        container.remove;
    });

    // tests
    it.only('Renders the form component correctly', () => {
        // check inputs rendered
        const inputs = container.querySelectorAll('input');
        expect(inputs).toHaveLength(2);

        // controller input
        expect(inputs[0].name).toBe('controller');
        expect(inputs[0].type).toBe('text');
        // email input
        expect(inputs[1].name).toBe('email');
        expect(inputs[1].type).toBe('email');

        
        // check textarea rendered
        const textareas = container.querySelectorAll('textarea');
        expect(textareas).toHaveLength(2);
        expect(textareas[0].name).toBe('criteria');
        expect(textareas[1].name).toBe('feedback');
        expect(textareas[1].value).toBe('{"status":"ready"}');

        // check for buttons
        const buttons = container.querySelectorAll('button');
        expect(buttons).toHaveLength(2);
        expect(buttons[0].name).toBe('submit');
        expect(buttons[1].name).toBe('clear');
    });

    it.only('Purforms request when we click submit button', () => {

    });

})