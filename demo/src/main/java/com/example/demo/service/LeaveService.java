package com.example.demo.service;

import com.example.demo.model.Leave;
import com.example.demo.repository.LeaveRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class LeaveService {

    @Autowired
    private LeaveRepository leaveRepository;

    // Retrieve all leaves
    public List<Leave> getAllLeaves() {
        return leaveRepository.findAll();
    }

    // Retrieve a leave by id
    public Leave getLeaveById(int id) {
        return leaveRepository.findById(id).orElse(null);
    }

    // Create a new leave
    public Leave createLeave(Leave leave) {
        return leaveRepository.save(leave);
    }

    // Update an existing leave
    public Leave updateLeave(int id, Leave leaveDetails) {
        Leave existingLeave = leaveRepository.findById(id).orElse(null);
        if (existingLeave != null) {
            existingLeave.setUserId(leaveDetails.getUserId());
            existingLeave.setLeaveDate(leaveDetails.getLeaveDate());
            existingLeave.setReason(leaveDetails.getReason());
            existingLeave.setStatus(leaveDetails.getStatus());
            return leaveRepository.save(existingLeave);
        }
        return null;
    }

       // **New: Update only the status of an existing leave**
       public Leave updateLeaveStatus(int id, String status) {
        Leave existingLeave = leaveRepository.findById(id).orElse(null);
        if (existingLeave != null) {
            existingLeave.setStatus(status);
            return leaveRepository.save(existingLeave);
        }
        return null;
    }

    // Delete a leave by id
    public void deleteLeave(int id) {
        leaveRepository.deleteById(id);
    }
}




