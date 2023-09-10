import multer from 'multer';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads/') // Aquí se especifica la ubicación de almacenamiento de las imágenes
  },
  filename: function (req, file, cb) {
    cb(null,  file.originalname) // Aquí se especifica el nombre del archivo
  }
});

const upload = multer({ storage: storage });

export default async (req, res, next) => {
  try {
    upload.single('photo')(req, res, function (err) {
      if (err instanceof multer.MulterError) {
        // Un error ocurrió cuando se subió.
        next(err);
      } else if (err) {
        // Un error desconocido ocurrió cuando se subió.
        next(err);
      }
      // Todo salió bien.
      res.send('Archivo subido con éxito');
    });
  } catch (error) {
    next(error);
  }
}