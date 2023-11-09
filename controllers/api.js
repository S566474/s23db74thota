exports.api = function(req, res) {
    res.json({
      resources: [
        {
          resource: 'door',
          verbs: ['GET', 'PUT', 'DELETE'],
        },
      ],
    });
  };