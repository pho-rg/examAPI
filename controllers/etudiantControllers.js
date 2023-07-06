exports.getPosts = (req, res, next) => {
    res.status(200).json({
      posts: [
        {
          _id: '1',
          nom: 'Leclerc',
          prenom: 'Charles',
          promotion: 'B2ESGI',
          creator: {
            name: 'Sciences-u'
          },
          createdAt: new Date()
        }
      ]
    });
  };
  
  exports.createPost = (req, res, next) => {
    const nom = req.body.nom;
    const prenom = req.body.prenom;
    // Create post in db
    res.status(201).json({
      message: 'Etudiant créé avec succès',
      post: { id: new Date().toISOString(), nom: nom, prenom: prenom }
    });
  };
  