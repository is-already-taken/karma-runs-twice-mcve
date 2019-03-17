
const path = require("path");

const KarmaConfig = require("karma").config;
const KarmaRunner = require("karma").runner;
const KarmaServer = require("karma").Server;


function readConfig() {
	return new Promise((resolve) => {
		const karmaConfig = KarmaConfig.parseConfig(path.resolve("./karma.conf.js"));

		// We use our own watcher that will issue Karma.run() eventually
		karmaConfig.autoWatch = false;

		resolve([karmaConfig]);
	});
}

function startKarma(karmaConfig) {
	const karmaServer = new KarmaServer(karmaConfig, function(exitCode) {
		console.log(`Karma has exited with ${exitCode}`);

		process.exit(exitCode);
	});

	karmaServer.start();
}

readConfig()
	.then(([karmaConfig]) => {
		// startBrowserSync(browserSyncConfig, karmaConfig);
		startKarma(karmaConfig);

		console.log("Issuing Karma.run() in 5s ...");
		setTimeout(() => {
			// KarmaRunner.run({ port: karmaConfig.port }, () => {});
			KarmaRunner.run(karmaConfig, () => {});
		}, 5000);
	});
