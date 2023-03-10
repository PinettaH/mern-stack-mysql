import { Form, Formik } from 'formik';
import { createTaskRequest } from '../api/task.api';


export const TaskForm = () => {
  return (
    <div>
      <Formik
        initialValues={{
          title: "",
          description: "",
        }}
        onSubmit={async (values) => {
          console.log(values);
          try {
            const response = await createTaskRequest(values);
            console.log(response);
          } catch (error) {
            console.error(error)
          }
        }}>
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <label>Title</label>
            <input type="text" name='title' onChange={handleChange} value={values.title} />

            <label>Descripcion</label>
            <textarea
              name="description"
              rows="3"
              placeholder="Write a description"
              onChange={handleChange}
              values={values.description}
            ></textarea>
            <button type="submit" disabled={isSubmitting}
            >{isSubmitting ? "Saving..." : "Save"}</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
