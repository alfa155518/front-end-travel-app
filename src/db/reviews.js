const reviews = [
  {
    _id: "5c8a34ed14eb5c17645c9108",
    review:
      "Cras mollis nisi parturient mi nec aliquet suspendisse sagittis eros condimentum scelerisque taciti mattis praesent feugiat eu nascetur a tincidunt",
    rating: 5,
    user: "user-1.webp",
    tour: "The Sea Explorer",
  },
  {
    _id: "5c8a355b14eb5c17645c9109",
    review:
      "Tempus curabitur faucibus auctor bibendum duis gravida tincidunt litora himenaeos facilisis vivamus vehicula potenti semper fusce suspendisse sagittis!",
    rating: 4,
    user: "user-2.webp",
    tour: "The Sea Explorer",
  },
  {
    _id: "5c8a359914eb5c17645c910a",
    review:
      "Convallis turpis porttitor sapien ad urna efficitur dui vivamus in praesent nulla hac non potenti!",
    rating: 5,
    user: "user-3.webp",
    tour: "The Sea Explorer",
  },
  {
    _id: "5c8a35b614eb5c17645c910b",
    review:
      "Habitasse scelerisque class quam primis convallis integer eros congue nulla proin nam faucibus parturient.",
    rating: 4,
    user: "user-4.webp",
    tour: "The Sea Explorer",
  },
  {
    _id: "5c8a364c14eb5c17645c910c",
    review:
      "Cras consequat fames faucibus ac aliquam dolor a euismod porttitor rhoncus venenatis himenaeos montes tristique pretium libero nisi!",
    rating: 5,
    user: "user-5.webp",
    tour: "The Forest Hiker",
  },
  {
    _id: "5c8a368c14eb5c17645c910d",
    review:
      "Laoreet justo volutpat per etiam donec at augue penatibus eu facilisis lorem phasellus ipsum tristique urna quam platea.",
    rating: 5,
    user: "user-6.webp",
    tour: "The Forest Hiker",
  },
  {
    _id: "5c8a36a014eb5c17645c910e",
    review:
      "Senectus lectus eleifend ex lobortis cras nam cursus accumsan tellus lacus faucibus himenaeos posuere!",
    rating: 5,
    user: "user-7.webp",
    tour: "The Forest Hiker",
  },
  {
    _id: "5c8a36b714eb5c17645c910f",
    review:
      "Pulvinar taciti etiam aenean lacinia natoque interdum fringilla suspendisse nam sapien urna!",
    rating: 4,
    user: "user-8.webp",
    tour: "The Forest Hiker",
  },
  {
    _id: "5c8a379a14eb5c17645c9110",
    review:
      "Pretium vel inceptos fringilla sit dui fusce varius gravida platea morbi semper erat elit porttitor potenti!",
    rating: 5,
    user: "user-9.webp",
    tour: "The Snow Adventurer",
  },
  {
    _id: "5c8a37b114eb5c17645c9111",
    review:
      "Ex a bibendum quis volutpat consequat euismod vulputate parturient laoreet diam sagittis amet at blandit.",
    rating: 4,
    user: "user-10.webp",
    tour: "The Snow Adventurer",
  },
  {
    _id: "5c8a37cb14eb5c17645c9112",
    review:
      "Auctor euismod interdum augue tristique senectus nascetur cras justo eleifend mattis libero id adipiscing amet placerat",
    rating: 5,
    user: "user-11.webp",
    tour: "The Snow Adventurer",
  },
  {
    _id: "5c8a37dd14eb5c17645c9113",
    review:
      "A facilisi justo ornare magnis velit diam dictumst parturient arcu nullam rhoncus nec!",
    rating: 4,
    user: "user-12.webp",
    tour: "The Park Camper",
  },
  {
    _id: "5c8a37f114eb5c17645c9114",
    review:
      "Porttitor ullamcorper rutrum semper proin mus felis varius convallis conubia nisl erat lectus eget.",
    rating: 5,
    user: "user-13.webp",
    tour: "The Park Camper",
  },
  {
    _id: "5c8a37f114eb5c17645c9115",
    review:
      "Auctor euismod interdum augue tristique senectus nascetur cras justo eleifend mattis libero id adipiscing amet placerat",
    rating: 5,
    user: "user-11.webp",
    tour: "The Park Camper",
  },
  {
    _id: "5c8a381714eb5c17645c9115",
    review:
      "Porttitor ullamcorper rutrum semper proin mus felis varius convallis conubia nisl erat lectus eget.",
    rating: 5,
    user: "user-14.webp",
    tour: "The City Wanderer",
  },
  {
    _id: "5c8a382d14eb5c17645c9116",
    review:
      "Semper blandit felis nostra facilisi sodales pulvinar habitasse diam sapien lobortis urna nunc ipsum orci.",
    rating: 5,
    user: "user-15.webp",
    tour: "The City Wanderer",
  },
  {
    _id: "5c8a384114eb5c17645c9117",
    review:
      "Neque amet vel integer placerat ex pretium elementum vitae quis ullamcorper nullam nunc habitant cursus justo!!!",
    rating: 5,
    user: "user-16.webp",
    tour: "The City Wanderer",
  },
  {
    _id: "5c8a385614eb5c17645c9118",
    review:
      "Sollicitudin sagittis ex ut fringilla enim condimentum et netus tristique.",
    rating: 5,
    user: "user-17.webp",
    tour: "The Sports Lover",
  },
  {
    _id: "5c8a387214eb5c17645c9119",
    review:
      "Semper tempus curae at platea lobortis ullamcorper curabitur luctus maecenas nisl laoreet!",
    rating: 5,
    user: "user-18.webp",
    tour: "The Sports Lover",
  },
  {
    _id: "5c8a38ac14eb5c17645c911a",
    review:
      "Arcu adipiscing lobortis sem finibus consequat ac justo nisi pharetra ultricies facilisi!",
    rating: 5,
    user: "user-19.webp",
    tour: "The Sports Lover",
  },
  {
    _id: "5c8a38c714eb5c17645c911b",
    review:
      "Rutrum viverra turpis nunc ultricies dolor ornare metus habitant ex quis sociosqu nascetur pellentesque quam!",
    rating: 5,
    user: "user-20.webp",
    tour: "The Sports Lover",
  },
  {
    _id: "5c8a38da14eb5c17645c911c",
    review:
      "Elementum massa porttitor enim vitae eu ligula vivamus amet imperdiet urna tristique donec mattis mus erat.",
    rating: 5,
    user: "user-1.webp",
    tour: "The Star Gazer",
  },
  {
    _id: "5c8a38ed14eb5c17645c911d",
    review:
      "Fusce ullamcorper gravida libero nullam lacus litora class orci habitant sollicitudin...",
    rating: 5,
    user: "user-2.webp",
    tour: "The Star Gazer",
  },
  {
    _id: "5c8a390d14eb5c17645c911e",
    review:
      "Varius potenti proin hendrerit felis sit convallis nunc non id facilisis aliquam platea elementum",
    rating: 5,
    user: "user-3.webp",
    tour: "The Star Gazer",
  },
  {
    _id: "5c8a391f14eb5c17645c911f",
    review:
      "Sem feugiat sed lorem vel dignissim platea habitasse dolor suscipit ultricies dapibus",
    rating: 5,
    user: "user-4.webp",
    tour: "The Northern Lights",
  },
  {
    _id: "5c8a395b14eb5c17645c9120",
    review:
      "Sem feugiat sed lorem vel dignissim platea habitasse dolor suscipit ultricies dapibus",
    rating: 5,
    user: "user-5.webp",
    tour: "The Northern Lights",
  },
  {
    _id: "5c8a399014eb5c17645c9121",
    review:
      "Tortor dolor sed vehicula neque ultrices varius orci feugiat dignissim auctor consequat.",
    rating: 4,
    user: "user-6.webp",
    tour: "The Northern Lights",
  },
  {
    _id: "5c8a39a214eb5c17645c9122",
    review:
      "Felis mauris aenean eu lectus fringilla habitasse nullam eros senectus ante etiam!",
    rating: 5,
    user: "user-7.webp",
    tour: "The Northern Lights",
  },
  {
    _id: "5c8a39b614eb5c17645c9123",
    review:
      "Blandit varius nascetur est felis praesent lorem himenaeos pretium dapibus tellus bibendum consequat ac duis",
    rating: 3,
    user: "user-8.webp",
    tour: "The Northern Lights",
  },
  {
    _id: "5c8a3a7014eb5c17645c9124",
    review:
      "Blandit varius nascetur est felis praesent lorem himenaeos pretium dapibus tellus bibendum consequat ac duis",
    rating: 5,
    user: "user-9.webp",
    tour: "The Wine Taster",
  },
  {
    _id: "5c8a3a8d14eb5c17645c9125",
    review:
      "Iaculis mauris eget sed nec lobortis rhoncus montes etiam dapibus suspendisse hendrerit quam pellentesque potenti sapien!",
    rating: 5,
    user: "user-10.webp",
    tour: "The Wine Taster",
  },
  {
    _id: "5c8a3a9914eb5c17645c9126",
    review:
      "Netus eleifend adipiscing ligula placerat fusce orci sollicitudin vivamus conubia.",
    rating: 5,
    user: "user-11.webp",
    tour: "The Wine Taster",
  },
  {
    _id: "5c8a3aaa14eb5c17645c9127",
    review:
      "Eleifend suspendisse ultricies platea primis ut ornare purus vel taciti faucibus justo nunc",
    rating: 4,
    user: "user-12.webp",
    tour: "The Bali",
  },
  {
    _id: "5c8a3abc14eb5c17645c9128",
    review:
      "Malesuada consequat congue vel gravida eros conubia in sapien praesent diam!",
    rating: 4,
    user: "user-13.webp",
    tour: "The Bali",
  },
  {
    _id: "5c8a3acf14eb5c17645c9129",
    review:
      "Curabitur maximus montes vestibulum nulla vel dictum cubilia himenaeos nunc hendrerit amet urna.",
    rating: 5,
    user: "user-14.webp",
    tour: "The Bali",
  },
  {
    _id: "5c8a3b1e14eb5c17645c912a",
    review:
      "Curabitur maximus montes vestibulum nulla vel dictum cubilia himenaeos nunc hendrerit amet urna.",
    rating: 5,
    user: "user-15.webp",
    tour: "The London",
  },
  {
    _id: "5c8a3b3214eb5c17645c912b",
    review:
      "Sociosqu eleifend tincidunt aenean condimentum gravida lorem arcu pellentesque felis dui feugiat nec.",
    rating: 5,
    user: "user-16.webp",
    tour: "The London",
  },
  {
    _id: "5c8a3b4714eb5c17645c912c",
    review:
      "Ridiculus facilisis sem id aenean amet penatibus gravida phasellus a mus dui lacinia accumsan!!",
    rating: 4,
    user: "user-17.webp",
    tour: "The London",
  },
  {
    _id: "5c8a3b6714eb5c17645c912e",
    review:
      "Venenatis molestie luctus cubilia taciti tempor faucibus nostra nisi curae integer.",
    rating: 5,
    user: "user-18.webp",
    tour: "The London",
  },
  {
    _id: "5c8a3b7c14eb5c17645c912f",
    review:
      "Tempor pellentesque eu placerat auctor enim nam suscipit tincidunt natoque ipsum est.",
    rating: 5,
    user: "user-19.webp",
    tour: "Canada",
  },
  {
    _id: "5c8a3b9f14eb5c17645c9130",
    review:
      "Tempor pellentesque eu placerat auctor enim nam suscipit tincidunt natoque ipsum est.",
    rating: 5,
    user: "user-20.webp",
    tour: "Canada",
  },
  {
    _id: "5c8a3bc414eb5c17645c9131",
    review:
      "Conubia semper efficitur rhoncus suspendisse taciti lectus ex sapien dolor molestie fusce class.",
    rating: 5,
    user: "user-1.webp",
    tour: "Canada",
  },
  {
    _id: "5c8a3bdc14eb5c17645c9132",
    review:
      "Conubia pharetra pulvinar libero hac class congue curabitur mi porttitor!!",
    rating: 5,
    user: "user-2.webp",
    tour: "Canada",
  },
];

export default reviews;
