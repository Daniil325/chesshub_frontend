import axios from "axios";

const postImage = async (image) => {
    const formData = new FormData();
    formData.append("image", image);
    const config = {
        headers: { "content-type": "multipart/form-data" },
    };
    return axios
        .post("http://localhost:8000/image/", formData, config)
        .then((data) => data?.name);
};

export const PreviewUpload = ({ setImage }) => {
    const onUploadImage = (e) => {
        setImage(e.target.files[0]["name"]);
        postImage(e.target.files[0]);
    };

    return (
        <>
            <label className="input-file">
                <i className="pi pi-upload" style={{ fontSize: "1rem", marginRight: "10px" }}></i>
                <input
                    id="uploadImage"
                    name="uploadImage"
                    className="file"
                    type="file"
                    accept="image/png, image/jpeg"
                    onChange={onUploadImage}
                />
                <span>Загрузить картинку</span>
            </label>
        </>
    );
};