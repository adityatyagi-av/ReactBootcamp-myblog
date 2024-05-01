
import { Formik , Form , Field} from 'formik';
import * as Yup from 'yup';
import { createClient } from "@supabase/supabase-js";

  const supabase = createClient("link", "anonkey");

const SignupSchema = Yup.object().shape({
  title: Yup.string().required('Required'),
  description:  Yup.string().required('Required'),
  image:  Yup.string().required('Required'),
  para1:  Yup.string().required('Required'),
  para2:  Yup.string().required('Required'),
  para3:  Yup.string().required('Required'),

  
});

 const CreateBlog = () => (
  <div>
    <h1>Signup</h1>
    <Formik
      initialValues={{
        title: '',
        description: '',
        image: '',
        para1: '',
        para2: '',
        para3: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={async (values) => {
        // same shape as initial values
        const {data,error}=await supabase.from("blogs").insert([{
            id:Math.floor(Math.random()*9),
            title:values.title,
            description:values.description,
            image:values.image,
            para1:values.para1,
            para2:values.para2,
            para3:values.para3,

        }])
        console.log(data);
            if(error){
                console.log("data not sent");
            }
            else{
                console.log("data sent");
            }
       
      }}
    >
      {({ errors, touched }) => (
        <Form className='flex gap-4 max-w-screen-md mx-auto flex-col'>
            <label  htmlFor="Title">Title</label>
          <Field name="title" className="border rounded-md border-black" />
          {errors.title && touched.title ? (
            <div>{errors.title}</div>
          ) : null}
          <label  htmlFor="Title">description</label>
          <Field name="description" className="border rounded-md border-black"/>
          {errors.description && touched.description ? (
            <div>{errors.description}</div>
          ) : null}
          <label  htmlFor="Title">images</label>
          <Field name="image" className="border rounded-md border-black" />
          {errors.image && touched.image ? (
            <div>{errors.image}</div>
          ) : null}
          <label  htmlFor="Title">para1</label>
          <Field name="para1" className="border rounded-md border-black"/>
          {errors.para1 && touched.para1 ? (
            <div>{errors.para1}</div>
          ) : null}
          <label  htmlFor="Title">para2</label>
          <Field name="para2" className="border rounded-md border-black"/>
          {errors.para2 && touched.para2 ? (
            <div>{errors.para2}</div>
          ) : null}
          <label  htmlFor="Title">para3</label>
          <Field name="para3" className="border rounded-md border-black"/>
          {errors.para3 && touched.para3 ? (
            <div>{errors.para3}</div>
          ) : null}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);
export default CreateBlog