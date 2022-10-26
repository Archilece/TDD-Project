import { render, screen, cleanup, waitFor } from "@testing-library/react";
import FetchRecords from "./FetchRecords";
import Login from "./Login";



describe("Testing results after fetch...", ()=>{
	
	afterEach(cleanup);

	it("Check if a certain user exists...", async () => {   
		render(<FetchRecords />);	
	    expect(await screen.findByText('Leanne Graham')).toBeInTheDocument();
	});

	it("Check if a certain user exists...", async () => {   
		render(<FetchRecords />);	
	    expect(await screen.findByText('Ervin Howell')).toBeInTheDocument();
	});

	it("Check if a certain user exists...", async () => {   
		render(<FetchRecords />);	
	    expect(await screen.findByText('Clementine Bauch')).toBeInTheDocument();
	});

	it("Check if a certain user exists...", async () => {   
		render(<FetchRecords />);	
	    expect(await screen.findByText('Patricia Lebsack')).toBeInTheDocument();
	});

	it("Check if a certain user exists...", async () => {   
		render(<FetchRecords />);	
	    expect(await screen.findByText('Chelsey Dietrich')).toBeInTheDocument();
	});

	it("Check if a certain user exists...", async () => {   
		render(<FetchRecords />);	
	    expect(await screen.findByText('Mrs. Dennis Schulist')).toBeInTheDocument();
	});

	it("Check if a certain user exists...", async () => {   
		render(<FetchRecords />);	
	    expect(await screen.findByText('Kurtis Weissnat')).toBeInTheDocument();
	});

	it("Check if a certain user exists...", async () => {   
		render(<FetchRecords />);	
	    expect(await screen.findByText('Nicholas Runolfsdottir V')).toBeInTheDocument();
	});

	it("Check if a certain user exists...", async () => {   
		render(<FetchRecords />);	
	    expect(await screen.findByText('Glenna Reichert')).toBeInTheDocument();
	});

	it("Check if a certain user exists...", async () => {   
		render(<FetchRecords />);	
	    expect(await screen.findByText('Clementina DuBuque')).toBeInTheDocument();
	});


	it("Check initial no of users in list...", async () => {  
		render(<FetchRecords />);
		expect(await screen.getByTestId("total-users")).toHaveTextContent("Total Users: 0"); 	
	});

	
});

describe("Check the UI.",()=>{
	it("has an input for email",()=>{
		render(<Login />);
		const email = screen.getByTestId("email");
		expect(email).toBeInTheDocument();
	});

	it("has an input for email type text",()=>{
		render(<Login />);
		const input = screen.getByTestId("email");
		expect(input).toBeInTheDocument();
		expect(input).toHaveAttribute("type", "text");
	});

	it("has an input for password",()=>{
		render(<Login />);
		const password = screen.getByTestId("password");
		expect(password).toBeInTheDocument();
	});

	it("has an input for email type password",()=>{
		render(<Login />);
		const input = screen.getByTestId("password");
		expect(input).toBeInTheDocument();
		expect(input).toHaveAttribute("type", "password");
	});
});
// describe("Testing a fetch...", ()=>{
	
// 	afterEach(cleanup); //clear garbage collection side effects, for async await

// 	it("test dynamic list...", async () => {   
// 		render(<FetchRecords />);	

// 		// eslint-disable-next-line testing-library/no-debugging-utils
// 		screen.debug(); // display dom in cmd/cli

// 		// Async/await
// 		// a programming pattern that will allow async processes to behave like sync.
// 		// waitFor() - if you need to wait and check for the results of an async..await
// 	    expect(await screen.findByText('Leanne Graham')).toBeInTheDocument();
// 		await waitFor(() => expect(screen.getAllByRole('listitem').length).toBe(10));
// 	});
// });
// it("Check total no of users in list...", async () => {  
	// 	render(<FetchRecords />);
	// 	// li tag/element has a role of listitem
	// 	// https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/listitem_role

	// 	// using getAllByRole()
	// 	// const items = await waitFor(() => screen.getAllByRole('listitem'));
	// 	// expect(items.length).toEqual(10);

	// 	// using getAllByTestId()
	// 	const users = await waitFor(() => screen.getAllByTestId('user'));
	// 	expect(users.length).toEqual(10);
	// });
