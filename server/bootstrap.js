Meteor.startup(function() {

  // if there are no polls available
  if (Polls.find().count() === 0) {

    // create sample polls
    var samplePolls = [
      {
        question: 'Is Meteor awesome?',
        choices: [
          { text: 'Of course!', votes: 0 },
          { text: 'Eh', votes: 0 },
          { text: 'No. I like plain JS', votes: 0 }
        ]
      },
    ];

    // loop over each sample poll and insert into database
    _.each(samplePolls, function(poll) {
      Polls.insert(poll);
    });
  }

});