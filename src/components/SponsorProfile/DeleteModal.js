import React from 'react'
import './DeleteModal.css'

const DeleteModal = () => {
    return (
        <div id="delete" class="modal fade" role="dialog">
        <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header">
               
                <h4 className="modal-title">Delete Data</h4>
            </div>
        <div class="modal-body">
            <strong>Are you sure you want to delete this data?</strong>
        </div>
        <div className="modal-footer">
            <button type="button" id="del" class=" btn-danger" data-dismiss="modal">Delete</button>
            <button type="button" class="btn-default" data-dismiss="modal">Close</button>
        </div>
        </div>
        </div>
                {/* <div id="edit" class="modal fade" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content edit-content">
            <div class="modal-header">
                <button type="button" className="close" data-dismiss="modal">×</button>
                <h4 class="modal-title">Update Data</h4>
            </div>
            <div class="modal-body ">
                <input id="fn" type="text" class="form-control s-input" name="fname" placeholder="Title"/>
                <input id="ln" type="text" class="form-control s-input" name="fname" placeholder="Author"/>
                <input id="mn" type="text" class="form-control s-input-content" name="fname" placeholder="Content"/>
            </div>
            <div class="modal-footer">
                <button type="button" id="up" class=" btn-warning" data-dismiss="modal">Update</button>
                <button type="button" class="btn-default" data-dismiss="modal">Close</button>
            </div>
            </div>
        </div>
        </div> */}
        </div>
        
    )
}

export default DeleteModal
