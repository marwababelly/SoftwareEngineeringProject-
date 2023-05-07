const Part = require("../model/part/part.model");

const genericResponse = require("../util/response");

// exports.getAll = (req, res, next) => {
//   Part.getAll()
//     .then(([rows, fieldData]) => {
//       res.status(200).json(rows);
//     })
//     .catch((err) => console.log(err));
// };

exports.action = async (req, res, next) => {
  const { id, name, subjectId, carTypeId } = req.body;
  let part = new Part(id, name, subjectId, carTypeId);
  try {
    const data = await part.action();
    const response = genericResponse({ data });
    res.status(201).json(response);
  } catch (error) {
    const response = genericResponse({
      errors: error,
      errorMessage: error.message,
    });
    res.status(500).json(response);
  }
};

// exports.delete = (req, res, next) => {
//   const partId = req.params.id;
//   Part.delete(partId)
//     .then((result) => {
//       res.status(202).json({
//         message: "Record deleted successfully",
//       });
//     })
//     .catch((err) => console.log(err));
// };
