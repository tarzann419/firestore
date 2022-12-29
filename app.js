db.collection('cafes').get().then((snapshot) => {
    console.log(snapshot.docs);
}) //async snapshot is a representation of data inside the collection