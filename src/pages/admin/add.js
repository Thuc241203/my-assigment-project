import { getCateProjects } from "@/api/cateprojects";
import { addProject } from "@/api/project";
import Header from "@/components/admin/header";
import Nav from "@/components/admin/nav";
import uploadFiles from "@/components/admin/uploadimg";
import { router, useEffect, useState } from "@/lib";

const Add = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getCateProjects().then((data) => setData(data));
  }, []);

  useEffect(() => {
    const form = document.getElementById("form-add");
    const projectName = document.getElementById("projectName");
    const projectDescribe = document.getElementById("project-describe");
    const projectContent = document.getElementById("projectContent");
    const projectLinkGithub = document.getElementById("project-linkGithub");
    const projectLinkPreview = document.getElementById("project-linkPreview");
    const projectCompletiontime = document.getElementById(
      "project-completiontime"
    );
    const projectFeedback = document.getElementById("project-feedback");
    const projectTechnology = document.getElementById("project-technology");
    const projectCategoryid = document.getElementById("project-categoryid");
    const projectAlbum = document.getElementById("project-album");
    const projectImg = document.getElementById("project-img");

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const urls = await uploadFiles(projectImg.files);
      const urls1 = await uploadFiles(projectAlbum.files);
      const newData = {
        name: projectName.value,
        describe: projectDescribe.value,
        content: projectContent.value,
        linkGithub: projectLinkGithub.value,
        linkPreview: projectLinkPreview.value,
        completiontime: projectCompletiontime.value,
        feedback: projectFeedback.value,
        technology: projectTechnology.value,
        feartedImage: urls,
        Album: urls1,
        categoryProjectId: projectCategoryid.value,
      };
      addProject(newData).then(() => {
        alert("Th??m th??nh c??ng")
        router.navigate("/admin/home")
      });
    });
  });
  return /*html*/ `
  <>
    <div class="sticky top-0">${Header()}</div>
    <div class="flex w-full">
      <div class="w-[15%] fixed top-0 h-[9in] bg-[#3DB142]">
        ${Nav()}
      </div>
      <div class="  w-[75%] ml-[20%] mt-5"> 
        <h1>Th??m d??? ??n</h1>
        <form action="" id="form-add">
          <h5>ID</h5>
            <p class="form-control">Auto</p>
          <h5>T??n</h5>
            <input class="form-control" type="text" id="projectName" placeholder="T??n d??? ??n"/>
          <h5>M?? t???</h5>
            <input type="text" class="form-control" id="project-describe"/>
          <h5>n???i dung</h5>
            <input class="form-control" type="text" id="projectContent" placeholder="N???i dung"/>
          <h5>???nh ?????i di???n</h5>
            <input type="file" class="form-control"  id="project-img"/>
          <h5>Album</h5>
            <input type="file" class="form-control" multiple id="project-album"/>
          <h5>Link Gihub</h5>
            <input type="text" class="form-control" id="project-linkGithub"/>
          <h5>Link Preview</h5>
            <input type="text" class="form-control" id="project-linkPreview"/>
          <h5>Completion time</h5>
            <input type="text" class="form-control" id="project-completiontime"/>
          <h5>Feedback</h5>
          <input type="text" class="form-control" id="project-feedback"/>
          <h5>Technology</h5>
          <input type="text" class="form-control" id="project-technology"/>
          <div class="form-group mb-3">
          <h5>Danh m???c</h5>
                    <select name="" id="project-categoryid">
                    ${data
                      .map((categoryProjects) => {
                        return `<option value="${categoryProjects.id}">${categoryProjects.name}</option>`;
                      })
                      .join("")}
                    <option value=""></option>
                    </select>
                </div>
          <div class="form-group">
              <button class="btn btn-primary">Th??m d??? ??n</button>
          </div>
        </form>
      </div>
    </div>
  </>
  `;
};
export default Add;
