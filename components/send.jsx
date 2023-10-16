import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import emailjs from "emailjs-com";

export default function EmailSend() {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [signature, setSignature] = useState("");
  const [includeSignature, setIncludeSignature] = useState(true);
  const [signatureImages, setSignatureImages] = useState([]);
  const [files, setFiles] = useState([]);

  const {
    getRootProps: getSignatureRootProps,
    getInputProps: getSignatureInputProps,
  } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setSignatureImages(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const sendEmail = async (e) => {
    e.preventDefault();

    let finalSignature = signature;

    if (includeSignature) {
      // Add text signature
      finalSignature +=
        "\n\n" + signatureImages.map((image) => image.preview).join("\n");

      // Add image attachments
      setFiles([...files, ...signatureImages]);
    }

    const templateParams = {
      to: to,
      subject: subject,
      message: finalSignature,
      attachments: files.map((file) => file.preview),
    };

    try {
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        templateParams,
        "YOUR_USER_ID"
      );
    } catch (error) {
      console.error("Failed to send email", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <div className="w-full max-w-md bg-white shadow-md rounded p-8">
        <label className="block text-gray-700 text-sm font-semibold mb-2">
          To:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-4 leading-tight focus:outline-none focus:shadow-outline"
          type="email"
          placeholder="Recipient Email"
          required
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />

        <label className="block text-gray-700 text-sm font-semibold mb-2">
          Subject:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-4 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Email Subject"
          required
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />

        <label className="block text-gray-700 text-sm font-semibold mb-2">
          Message:
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-4 leading-tight focus:outline-none focus:shadow-outline h-32"
          placeholder="Compose your message..."
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <label className="block text-gray-700 text-sm font-semibold mb-2">
          Signature (Text):
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-4 leading-tight focus:outline-none focus:shadow-outline h-16"
          placeholder="Your Email Signature (Text)"
          value={signature}
          onChange={(e) => setSignature(e.target.value)}
        />

        {/* Preview for Image-based Signature */}
        {signatureImages.length > 0 && (
          <div className="mb-4">
            <strong>Image Signature Preview:</strong>
            {signatureImages.map((image, index) => (
              <img
                key={index}
                src={image.preview}
                alt={`Signature ${index + 1}`}
                className="max-w-xs mt-2"
              />
            ))}
          </div>
        )}

        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            className="mr-2"
            checked={includeSignature}
            onChange={() => setIncludeSignature(!includeSignature)}
          />
          <label className="text-gray-700 text-sm">Include Signature</label>
        </div>

        <div
          {...getRootProps()}
          className="mb-4 p-4 border-dashed border-2 rounded"
        >
          <input {...getInputProps()} />
          <p className="text-gray-600">
            Drag 'n' drop files here, or click to select files
          </p>
        </div>

        <div className="flex items-center justify-end">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={sendEmail}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
