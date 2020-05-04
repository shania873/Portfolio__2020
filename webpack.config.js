//path est un module node.js qui permet de resoudre le chermin absolue avec "path.resolve"
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
//point d'entrée va être chargée en premier
//webpack va ensuite annalyser ce fichier pour constituer l'arbre de dépendances
//Chaques fichiers importées sont une dépendance de ce fichier
module.exports = {
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    //"dirname permet d'écrire le chemin absolue"
    //"filname " permet de donner le nom du bundle principal
    filename: "[name].bundle.js"
  },
  module: {
      //rules permet de créer différentes régles pour le loader le fichier qui est pas passée part exclude utilisera le loader "babel-loader"
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  //les plugins permettent une opération globales lors du building comme optimiser le code et gérer les assets 
  //htmlwebpackplugin permet d'injecter le bundle.js automatiquement de le html après le build
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html")
    })
  ],
  devtool: "source-map",
  mode: "development",
  //devserver est bien entendu le server
  devServer: {
    //permet de dire ou ce servir pour faire fonctionner le loader
    contentBase: path.resolve(__dirname, "./dist"),
    //il insére un script dans le bundle pour que après une sauvegarde il s'auto reload
    inline: true,
    //permet d'ouvrir le navigateur part défaut après webpack lancée
    open: true,
    //permet de mettre à jour le bundle en temps réel quand tu change le code source
    hot: true,
    //port utilisée pour le server
    port: 4000
  }
};