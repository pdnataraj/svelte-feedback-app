<script>
	import FeedbackList from "./components/FeedbackList.svelte";
	import FeedbackStats from "./components/FeedbackStats.svelte";
	import FeedbackForm from "./components/FeedbackForm.svelte";

// 	let feedback = [
//     {
//         id: 1,
//         rating: 10,
//         text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, error?'
//     },
//     {
//         id: 2,
//         rating: 9,
//         text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, error?'
//     },
//     {
//         id: 3,
//         rating: 8,
//         text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, error?'
//     }
// ]



	const deleteFeedback = (e) => {
		const itemId = e.detail
		feedback = feedback.filter((item) => item.id != itemId)
	}

	// const addFeedback = (e) => {
	// 	const newFeedback = e.detail
	// 	feedback = [newFeedback, ...feedback]
	// }
</script>

<main class="container">
	<FeedbackForm />
	<FeedbackStats />
	<FeedbackList />
</main>

<style>

</style>