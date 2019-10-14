const allCharacters = [
  {
    '_id': '5da237699734fdcb7bef8f51',
    'name': 'Arnold Shortman',
    'image': 'https://vignette.wikia.nocookie.net/heyarnold/images/f/f5/Arnold.png/revision/latest?cb=20181027162333'
  },
  {
    '_id': '5da237699734fdcb7bef8f53',
    'name': 'Grandma Gertie',
    'image': 'https://vignette.wikia.nocookie.net/heyarnold/images/7/7b/DB87AC2A-C2C2-4DAB-AECF-B9F7273C746B.png/revision/latest/scale-to-width-down/306?cb=20190816101257'
  },
  {
    '_id': '5da237699734fdcb7bef8f52',
    'name': 'Grandpa Phil',
    'image': 'https://vignette.wikia.nocookie.net/heyarnold/images/7/79/GrandpaPhil.png/revision/latest/scale-to-width-down/300?cb=20160924030436'
  },
  {
    '_id': '5da237699734fdcb7bef8f56',
    'name': 'Miles Shortman',
    'image': 'https://vignette.wikia.nocookie.net/heyarnold/images/2/2e/Miles.jpg/revision/latest/scale-to-width-down/243?cb=20101115140639'
  },
  {
    '_id': '5da237699734fdcb7bef8f54',
    'name': 'Mitzi',
    'image': 'https://vignette.wikia.nocookie.net/heyarnold/images/d/d9/Mitzi.png/revision/latest/scale-to-width-down/310?cb=20171212070331'
  },
  {
    '_id': '5da237699734fdcb7bef8f55',
    'name': 'Arnie',
    'image': 'https://vignette.wikia.nocookie.net/heyarnold/images/4/42/Arnie.jpg/revision/latest/scale-to-width-down/310?cb=20110109195825'
  },
  {
    '_id': '5da237699734fdcb7bef8f57',
    'name': 'Stella Shortman',
    'image': 'https://vignette.wikia.nocookie.net/heyarnold/images/f/fa/Stella.jpg/revision/latest?cb=20101225143956'
  },
  {
    '_id': '5da237699734fdcb7bef8f59',
    'name': 'Grandpa\'s grandfather',
    'image': 'https://vignette.wikia.nocookie.net/heyarnold/images/f/f7/Grandpa%27s_grandfather.png/revision/latest/scale-to-width-down/310?cb=20190228081015'
  },
  {
    '_id': '5da237699734fdcb7bef8f5a',
    'name': 'Oskar Kokoshka',
    'image': 'https://vignette.wikia.nocookie.net/heyarnold/images/c/c5/Oskar_Kokoshka.png/revision/latest/scale-to-width-down/310?cb=20180707032418'
  },
  {
    '_id': '5da237699734fdcb7bef8f58',
    'name': 'Grandpa\'s father',
    'image': 'https://vignette.wikia.nocookie.net/heyarnold/images/e/e0/Grandpa%27s_father.png/revision/latest/scale-to-width-down/310?cb=20190228081112'
  },
  {
    '_id': '5da237699734fdcb7bef8f5c',
    'name': 'Nancy',
    'image': 'https://vignette.wikia.nocookie.net/heyarnold/images/6/62/Nancy.jpg/revision/latest/scale-to-width-down/310?cb=20110423055923'
  },
  {
    '_id': '5da237699734fdcb7bef8f5b',
    'name': 'Suzie Kokoshka',
    'image': 'https://vignette.wikia.nocookie.net/heyarnold/images/f/fe/Suzie.jpg/revision/latest/scale-to-width-down/310?cb=20110223003447'
  },
  {
    '_id': '5da237699734fdcb7bef8f5e',
    'name': 'Mr. Hyunh',
    'image': 'https://vignette.wikia.nocookie.net/heyarnold/images/6/60/Mr._Hyunh.png/revision/latest/scale-to-width-down/310?cb=20180707031441'
  },
  {
    '_id': '5da237699734fdcb7bef8f61',
    'name': 'Lana Vail',
    'image': 'https://vignette.wikia.nocookie.net/heyarnold/images/e/e8/762C69BE-23BA-48BA-9B14-6AF3246FCD3F.jpeg/revision/latest/scale-to-width-down/304?cb=20190106211607'
  },
  {
    '_id': '5da237699734fdcb7bef8f60',
    'name': 'Mr. Smith',
    'image': 'https://vignette.wikia.nocookie.net/heyarnold/images/8/80/Mr._Smith.jpg/revision/latest?cb=20110206233402'
  },
  {
    '_id': '5da237699734fdcb7bef8f62',
    'name': 'Mr. Purdy (character)',
    'image': 'https://vignette.wikia.nocookie.net/heyarnold/images/9/9c/Mr._Purdy_%28character%29.jpeg/revision/latest?cb=20190125214742'
  },
  {
    '_id': '5da237699734fdcb7bef8f66',
    'name': 'Olga Pataki',
    'image': 'https://vignette.wikia.nocookie.net/heyarnold/images/5/5e/Olga_Pataki.png/revision/latest/scale-to-width-down/310?cb=20180124053913'
  },
  {
    '_id': '5da237699734fdcb7bef8f65',
    'name': 'Miriam Pataki',
    'image': 'https://vignette.wikia.nocookie.net/heyarnold/images/6/6a/Miriam_Pataki.png/revision/latest/scale-to-width-down/310?cb=20170622020421'
  },
  {
    '_id': '5da237699734fdcb7bef8f6b',
    'name': 'Timberly Johanssen',
    'image': 'https://vignette.wikia.nocookie.net/heyarnold/images/e/e8/Timberly.png/revision/latest/scale-to-width-down/310?cb=20171210045406'
  },
  {
    '_id': '5da237699734fdcb7bef8f67',
    'name': 'Gerald Johanssen',
    'image': 'https://vignette.wikia.nocookie.net/heyarnold/images/9/9c/GeraldShow.png/revision/latest/scale-to-width-down/310?cb=20181027162223'
  }
];

export default allCharacters;
