
const embedTableau = () =>  {

	let instances = [];

	let embeds = document.querySelectorAll('.wsu-e-tableau');

	for ( i = 0; i < embeds.length; ++i) {

		let containerID = embeds[ i ].getAttribute('id');
		let url = embeds[ i ].dataset.view;

		var containerDiv = document.getElementById( containerID ),
		options = {
			hideTabs: true,
			onFirstInteractive: function () {
				console.log("Run this code when the viz has finished loading.");
			}
		};

		var viz = new tableau.Viz(containerDiv, url, options);
		// Create a viz object and embed it in the container div.

		instances.push( viz );

	}

	return instances;

}

let wsuTableau = embedTableau();